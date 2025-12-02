import Header from "/src/Components/Header.jsx";
import ProdutoCard from "/src/Components/ProdutoCard.jsx";
function App() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2>Nossos Produtos em Destaque</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <ProdutoCard />
          <ProdutoCard />
        </div>
      </main>
    </>
  );
}
export default App;
