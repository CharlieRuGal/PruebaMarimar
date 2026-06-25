import './Nombre.css'

function Nombre() {
  return (
    <section className="nombre-card" aria-label="Saludo personalizado">
      <p className="nombre-eyebrow">Bienvenido</p>
      <h1 className="nombre-title">
        Hola,
        <span>Carlos Galagarza</span>
      </h1>
      <p className="nombre-message">
        Que este espacio brille con tus ideas, tu energia y todo lo bueno que
        estas construyendo.
      </p>
      <div className="nombre-sparkles" aria-hidden="true">
        <span>*</span>
        <span>+</span>
        <span>*</span>
      </div>
    </section>
  )
}

export default Nombre
