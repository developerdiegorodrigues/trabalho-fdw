// Função para exibir o conteúdo do primeiro tópico
document.getElementById('link1').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('content').innerHTML = `
    <p>Olá! Me chamo Diego, sou apaixonado por tecnologia, impressão 3D, robótica e desenvolvimento de software.</p>
    <p>Meus hobbies incluem montar projetos DIY, estudar inteligência artificial e explorar novas linguagens de programação.</p>
  `;
});

// Função para exibir o conteúdo do segundo tópico
document.getElementById('link2').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('content').innerHTML = `
    <div style="text-align: left;">
      <p>Sou desenvolvedor full-stack com experiência principalmente em:</p>
      <ul>
        <li>Back-end: Java com Spring Boot</li>
        <li>Front-end: Angular, HTML, CSS, JavaScript/TypeScript</li>
        <li>DevOps: Docker, Docker Compose</li>
        <li>Banco de Dados: PostgreSQL, MongoDB, Redis</li>
        <li>Outros: Kubernetes, Kafka</li>
      </ul>
      <p>Atualmente curso análise e desenvolvimento de sistemas pela Uniter.</p>
      <p>Para mais informações sobre carreira, acesse o READ.ME do meu GitHub:</p>
      <p>
        <a href="https://github.com/developerdiegorodrigues" target="_blank" style="color: #4ea1d3;">Página inicial do GitHub</a>
      </p>
    </div>
  `;
});

// Função para exibir o conteúdo do terceiro tópico
document.getElementById('link3').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('content').innerHTML = `
    <p>Você pode conferir meus projetos de desenvolvimento de software no meu repositório do GitHub.</p>
    <p>
      <a href="https://github.com/developerdiegorodrigues?tab=repositories" target="_blank" style="color: #4ea1d3;">Acesse meus repositórios no GitHub</a>
    </p>
  `;
});

// Função para exibir o conteúdo do quarto tópico
document.getElementById('link4').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('content').innerHTML = `
    <form onsubmit="event.preventDefault(); alert('Mensagem enviada!');">
      <p><input type="text" name="nome" placeholder="Seu nome" required></p>
      <p><input type="email" name="email" placeholder="Seu email" required></p>
      <p><textarea name="mensagem" placeholder="Sua mensagem" rows="4" required></textarea></p>
      <p><button type="submit">Enviar</button></p>
    </form>
  `;
});