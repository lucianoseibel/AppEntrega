
export function entregadorValidator (entregador) {

    const veiculos = ['bicicleta','moto','roler']

    if (!entregador.nome) {
        return "entregador nome is mandatory"
    }

    if (!entregador.veiculo) {
        return "entregador veiculo is mandatory"
    }

    if (!veiculos.includes(entregador.veiculo)) {
        return "entregador veiculo is invalid"
    }
}