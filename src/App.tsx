import { Button, Flex, Grid, MantineProvider, TagsInput, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import { useState } from 'react'
import { theme } from './theme'
import { Header } from './components'

function App() {

  const [operand1, setOperand1] = useState<string[]>([])
  const [operand2, setOperand2] = useState<string[]>([])
  const [operation, setOperation] = useState<string>('')
  const [powerSetMembers, setPowerSetMembers] = useState<number>(0)

  const handleClear = () => {
    setOperand1([])
    setOperand2([])
    setOperation('')
    setPowerSetMembers(0)
  }

  const handleClearEntry = () => {
    setOperand1([])
  }

  const handlePowerSetMembers = () => {
    setOperand2([])
    setPowerSetMembers(2 ** operand1.length)
    setOperand1([])
  }

  const handleEqualsClick = () => {
    switch (operation) {
      case 'union':
        setOperand2(Array.from(new Set([...operand2, ...operand1])))
        setOperand1([])
        break
      case 'intersection':
        setOperand2(operand1.filter(value => operand2.includes(value)))
        setOperand1([])
        break
      case 'cartesian':
        setOperand2(operand1.flatMap(a => operand2.map(b => `(${a}, ${b})`)))
        setOperand1([])
        break
      default:
        break
    }
  }

  const handleUnionClick = () => {
    setOperation('union')
    setOperand2(operand1)
    setOperand1([])
  }

  const handleIntersectionClick = () => {
    setOperation('intersection')
    setOperand2(operand1)
    setOperand1([])
  }

  const handleCartesianClick = () => {
    setOperation('cartesian')
    setOperand2(operand1)
    setOperand1([])
  }

  return (
    <MantineProvider theme={theme}>
        <Flex direction='column' justify='center' align='center' gap='md' h='100vh' w='100%'>
          <Header />
          <Flex direction='column' align='center' justify='right' gap='md' h='100%' maw='800' p='lg'>
            <Title>Set Calculator</Title>
            <Grid>
              <Grid.Col span={12}>
                <TagsInput readOnly value={operand2} leftSection={powerSetMembers > 0 ? powerSetMembers : operand2.length === 0 && 'Ø'}/>
              </Grid.Col>
              <Grid.Col span={12}>
                <TagsInput value={operand1} onChange={setOperand1} leftSection={operand1.length === 0 && 'Ø'}/>
              </Grid.Col>
              <Grid.Col span={6}>
                <Grid>
                  <Grid.Col span={6}>
                    <Button onClick={handleUnionClick}>∪</Button>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Button onClick={handleIntersectionClick}>∩</Button>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Button  onClick={handlePowerSetMembers}>|P(S)|</Button>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Button onClick={handleCartesianClick}>×</Button>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
              <Grid.Col span={6}>
                <Grid>
                  <Grid.Col span={6}>
                    <Button  onClick={handleClear}>C</Button>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Button  onClick={handleClearEntry}>CE</Button>
                  </Grid.Col>
                  <Grid.Col span={12}>
                    <Button onClick={handleEqualsClick}>=</Button>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Flex>
          <a href='https://github.com/fisocodes/set-calculator' target='_blank' rel='noopener noreferrer'>
            <img src='logos/github_logo.png' alt='GitHub Link' height={50}/>
          </a>
        </Flex>
    </MantineProvider>
  )
}

export default App
