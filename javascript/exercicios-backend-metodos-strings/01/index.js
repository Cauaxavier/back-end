const comentario = "Essa Pandemia é muito perigoso!".toUpperCase();
const permitido = comentario.includes('COVID') || comentario.includes('PANDEMIA') ? false : true

if (!permitido) {
    console.log('Comentário bloqueado por conter palavras proibidas')
} else {
    console.log('Comentário autorizado')
}