
export default function CepObj ({cep}){
    return (
        <div className="cepObj">
            <h1>CEP: {cep.cep}</h1>
            <h2>{cep.logradouro}</h2>
            <h2>{cep.complemento}</h2>
            <h2>{cep.unidade}</h2>
            <h2>{cep.bairro}</h2>
            <h2>{cep.localidade}</h2>
            <h2>{cep.uf}</h2>
            <h2>{cep.ibge}</h2>
            <h2>{cep.gia}</h2>
            <h2>{cep.ddd}</h2>
            <h2>{cep.siafi}</h2>
        </div>
    )
}