export default function Princing() {
  const pricingData: {
    title: string;
    description: string;
    price: string;
  }[] =
    [
      {
        title: "Caminhada com um único cachorro",
        description: "Uma caminhada de 30 minutos para seu cachorro.",
        price: "R$20",
      },
      {
        title: "Encontro cachorrinho",
        description: "Duas horas de diversão e exercício com outros cães.",
        price: "R$35",
      },
      {
        title: "Pacote de caminhada semanal",
        description: "Cinco caminhadas de 30 minutos (uma por dia).",
        price: "R$90",
      },
    ];

  return (
    <section id="pricing" className="bg-white text-primary py-16">
      <div className="w-[90%] mx-auto max-w-5xl">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Planos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.map((item, index) => (
              <div key={index} className="bg-primary text-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-lg mt-4">{item.description}</p>
                <p className="text-3xl font-bold mt-6">{item.price}</p>
                <button className="bg-white text-black hover:bg-blue-600 font-semibold py-2 px-4 mt-6 rounded-md">
                  Começar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}