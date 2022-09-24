import { getExampleMock, getExampleMock2 } from './example_mock'
import { getExampleService, getExampleService2 } from './example_service'

export const useMock = false //Fazer depois ficar dinâmico com variável de ambiente

export const getExample = useMock ? getExampleMock : getExampleService

export const getExample2 = useMock ? getExampleMock2 : getExampleService2
