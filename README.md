# React Custom Hooks

Este repositorio contiene una colección de custom hooks creados para resolver patrones comunes en el desarrollo de aplicaciones React. Cada hook está diseñado para ser reutilizable y fácil de integrar en tus proyectos.

## Índice

- [useFetchJson](#usefetchjson)
- [useDebounce](#usedebounce)
- [useLocalStorage](#uselocalstorage)

## useFetchJson

Este hook simplifica el proceso de realizar peticiones HTTP a través de fetch y manejar el estado de carga y error. Convierte automáticamente la respuesta a JSON.

### Parámetros

- `fetchingFn`: Una función que retorna una promesa de una respuesta `Response`.
- `initialCall` (opcional): Un booleano que indica si se debe hacer la llamada inicial al montar el componente. Por defecto es `true`.

### Retorno

- `loading`: Un booleano que indica si la petición está en proceso.
- `error`: Un booleano que indica si ha ocurrido un error en la petición.
- `data`: Los datos obtenidos de la petición.
- `fetcher`: Una función para ejecutar la petición manualmente.

## useDebounce

El hook `useDebounce` se utiliza para retrasar la ejecución de una función hasta que ha pasado una cantidad de tiempo específica desde la última vez que se invocó.

## Parámetros

`fn`: La función que se quiere ejecutar de manera diferida.
`delay`: El tiempo de espera en milisegundos.

### Retorno

Una función que, al ser llamada, retrasará la ejecución de fn por el tiempo especificado en delay.
