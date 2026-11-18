import Image from "next/image";

const brands = [
  {
    name: "Teesside University",
    image: "/images/brands/teesside-university.png",
    className: "brand-teesside",
  },
  {
    name: "MyQuickServe Digital Solutions",
    image: "/images/brands/myquickserve.png",
    className: "brand-myquickserve",
  },
  {
    name: "Dove’s Grills & Lounge",
    image: "/images/brands/doves-grills.png",
    className: "brand-doves",
  },
  {
    name: "StudyPro by MyQuickServe",
    image: "/images/brands/studypro.jpg",
    className: "brand-studypro",
  },
];

export default function Brands() {
  return (
    <section className="shell brands" aria-labelledby="brands-title">
      <h2 id="brands-title">
        Brands I’ve <em>worked with.</em>
      </h2>
      <div className="brand-grid">
        {brands.map((brand) => (
          <div className={`brand-logo ${brand.className}`} key={brand.name}>
            <Image src={brand.image} alt={brand.name} width={360} height={180} />
          </div>
        ))}
      </div>
    </section>
  );
}
