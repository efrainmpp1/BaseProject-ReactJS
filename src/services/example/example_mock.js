import delay from '../../utils/delay'
import example from '../../tests/mocks/example/example.json'

export const getExampleMock = async () => {
  await delay()
  return example
}

export const getExampleMock2 = async () => {
  await delay()
  return example
}

// ...
