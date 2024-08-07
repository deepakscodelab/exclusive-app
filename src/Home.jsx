import { Category } from "./components/Category";
import { FlashSale } from "./components/FlashSale";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <FlashSale />
      <Category />
    </div>
  );
}
