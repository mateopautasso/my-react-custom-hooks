# React Custom Hooks

Este repositorio contiene una colección de custom hooks creados por mí los cuales tienen como objetivo resolver patrones comunes en el desarrollo de aplicaciones con React. Cada hook está diseñado para ser reutilizable y fácil de integrar en cualquier proyecto.

## Índice

- [useLoadingFetch](#useLoadingFetch)
- [useControlledFetch](#useControlledFetch)
- [useDebounce](#usedebounce)
- [useLocalStorage](#uselocalstorage)

### useLoadingFetch

`useLoadingFetch` es un custom hook que gestiona el estado de carga para las peticiones fetch, facilitando la integración de indicadores de carga en tus componentes.

#### Parámetros

No recibe parámetros.

#### Retorno

- `loading: boolean` - Indica si la petición está en proceso.
- `fetcher: (url: string, options?: RequestInit) => Promise<Response>` - Función para ejecutar la petición manualmente.

### useControlledFetch

`useControlledFetch` es un custom hook que facilita las peticiones de datos, manejando el estado de carga, los errores y proporcionando control sobre la cancelación de solicitudes anteriores. Ideal para abstraer lógica y evitar posibles encadenamientos de peticiones.

#### Parámetros

No recibe parámetros.

#### Retorno

- `data: T | null` - Los datos obtenidos de la petición.
- `error: boolean` - Indica si ha ocurrido un error en la petición.
- `loading: boolean` - Indica si la petición está en proceso.
- `controlledFetch: (url: string, options?: RequestInit) => Promise<void>` - Función para ejecutar la petición manualmente.

### useDebounce

`useDebounce` se apoya en la técnica 'Anti-rebote' para retrasar la ejecución de una función hasta que ha pasado una cantidad de tiempo específica desde la última vez que se invocó.

#### Parámetros

- `call`: La función que se quiere ejecutar de manera diferida.
- `delay`: El tiempo de espera en milisegundos.

#### Retorno

Una función que, al ser llamada, retrasará la ejecución de `call` por el tiempo especificado en delay.

### useLocalStorage

`useLocalStorage` se utiliza para gestionar el estado con persistencia en el localStorage del navegador.

#### Parámetros

No requiere parámetros.

#### Retorno

- `inLocalStorage`: Un objeto que contiene todos los elementos actualmente almacenados en el localStorage.
- `getItem`: Una función que toma una clave y retorna el valor asociado desde el localStorage.
- `setItem`: Una función que toma una clave y un valor, y guarda este último en el localStorage.
- `removeItem`: Una función que toma una clave y elimina el elemento asociado del localStorage.

## Enlaces

🔗 **Mi Linkedin**: [Mateo Pautasso](https://www.linkedin.com/in/mateo-pautasso-25b022247/)
