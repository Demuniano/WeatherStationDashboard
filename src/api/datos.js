export async function Obtenerdatos() {
    const respuestas = await fetch(import.meta.env.API_URL)
    const resultado = await respuestas.json()
    console.log('aaa',resultado);
    return resultado;
}