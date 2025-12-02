function ProdutoCard() {

const nomeProduto = "Semente de Milho Híbrido";
const descricao = "Semente de alta produtividade, resistente a doenças comuns. Ideal para a safra atual.";
const preco = 125.50;
return (
<div className="card-produto" style={{ border: '1px solid #ccc', padding: '15px', margin: '10px',
maxWidth: '300px' }}>
<h2>{nomeProduto}</h2> 
<p>{descricao}</p>
<hr />
<p>Preço:
<span style={{ fontWeight: 'bold', color: 'green' }}>
R$ {preco.toFixed(2)}
</span>
</p>
<button style={{ backgroundColor: '#b411ffff', color: 'white', padding: '8px 12px', border: 'none',
borderRadius: '4px' }}>
Adicionar ao Carrinho
</button>
</div>
);

}
export default ProdutoCard;