import ListaDeTareas from './componentes/ListaDeTareas';

export default function App() {
  return (
    <div className=' d-flex flex-column justify-content-center'>
      <h1 className="text-center my-3 text-light">Mis Tareas</h1>
      <ListaDeTareas />
    </div>
  );
}

