# React Custom Hooks

Este repositorio contiene una colección de custom hooks creados para resolver patrones comunes en el desarrollo de aplicaciones React. Cada hook está diseñado para ser reutilizable y fácil de integrar en tus proyectos.

## Índice

- [useFetchJson](#usefetchjson)
- [useDebounce](#usedebounce)
- [useLocalStorage](#uselocalstorage)

## useFetchJson

`useFetchJson` simplifica el proceso de realizar peticiones HTTP a través de fetch y manejar el estado de carga y error. Convierte automáticamente la respuesta a JSON.

### Parámetros

- `fetchingFn`: Una función que retorna una promesa de una respuesta `Response`.
- `initialCall` (opcional): Un booleano que indica si se debe hacer la llamada inicial al montar el componente. Por defecto es `true`.

### Retorno

- `loading`: Un booleano que indica si la petición está en proceso.
- `error`: Un booleano que indica si ha ocurrido un error en la petición.
- `data`: Los datos obtenidos de la petición.
- `fetcher`: Una función para ejecutar la petición manualmente.

## useDebounce

`useDebounce` se utiliza para retrasar la ejecución de una función hasta que ha pasado una cantidad de tiempo específica desde la última vez que se invocó.

## Parámetros

`fn`: La función que se quiere ejecutar de manera diferida.
`delay`: El tiempo de espera en milisegundos.

### Retorno

Una función que, al ser llamada, retrasará la ejecución de fn por el tiempo especificado en delay.

## useLocalStorage

`useLocalStorage` se utiliza para gestionar el estado con persistencia en el localStorage del navegador.

### Parámetros

No requiere parámetros.

### Retorno

- `inLocalStorage`: Un objeto que contiene todos los elementos actualmente almacenados en el localStorage.
- `getItem`: Una función que toma una clave y retorna el valor asociado desde el localStorage.
- `setItem`: Una función que toma una clave y un valor, y guarda este último en el localStorage.
- `removeItem`: Una función que toma una clave y elimina el elemento asociado del localStorage.
