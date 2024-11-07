import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        {/* Background Image */}
        <Image
          src="/images/ressources/main-banner.jpeg"
          alt="Boulangerie Artisanale"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl mb-4">
              Boulangerie Artisanale
            </h1>
            <p className="text-xl mb-8">
              Découvrez nos pains et pâtisseries faits maison avec passion depuis 1987
            </p>
            <Link 
              href="/commander" 
              className="bg-bakery-600 hover:bg-bakery-700 text-white px-8 py-3 rounded-md inline-block transition"
            >
              Commander en ligne
            </Link>
          </div>
        </div>
      </section>



      {/* Nos Spécialités */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-12">Nos Spécialités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Pains Traditionnels', 'Viennoiseries', 'Pâtisseries'].map((item, index) => (
              <div key={index} className="text-center p-6 bg-bakery-50 rounded-lg">
                <h3 className="font-serif text-2xl mb-4">{item}</h3>
                <p className="text-bakery-700">Découvrez notre sélection de {item.toLowerCase()} préparés chaque jour avec amour.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-bakery-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-8">Notre Histoire</h2>
            <p className="text-lg mb-6">
              Depuis plus de 35 ans, notre boulangerie familiale perpétue la tradition du bon pain artisanal. 
              Chaque jour, nos artisans boulangers se lèvent tôt pour vous proposer des produits frais et authentiques.
            </p>
            <Link href="/notre-histoire" className="text-bakery-600 hover:text-bakery-700 font-semibold">
              En savoir plus →
            </Link>
          </div>
        </div>
      </section>

      {/* Carte de Fidélité */}
      <section className="py-16 bg-bakery-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-8">Carte de Fidélité</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez notre programme de fidélité et bénéficiez d'avantages exclusifs.
            Votre 10ème baguette offerte !
          </p>
          <button className="bg-white text-bakery-600 px-8 py-3 rounded-md hover:bg-bakery-50 transition">
            Obtenir ma carte
          </button>
        </div>
      </section>

      {/* Horaires et Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl mb-6">Nos Horaires</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>6h30 - 19h30</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span>6h30 - 20h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span>
                  <span>7h00 - 13h00</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-6">Contact</h2>
              <address className="not-italic">
                <p className="mb-2">123 Rue du Pain</p>
                <p className="mb-2">75001 Paris</p>
                <p className="mb-2">Tél: 01 23 45 67 89</p>
                <p>Email: contact@boulangerie-artisanale.fr</p>
              </address>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;