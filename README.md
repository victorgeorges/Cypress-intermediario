# Testes automatizados com Cypress 
Curso intermediário de automação de testes com Cypress da Escola Talking About Testing.

# Pré-requisitos

Antes de começar, garanta que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) (estou usando a versão `2.34.1`)
- [Node.js](https://nodejs.org/en/) (estou usando a versão `v16.13.2` )
- npm (estou usando a versão `8.3.2` e)
- [Google Chrome](https://www.google.com/intl/pt_br/chrome/) (estou usando a versão `98.0.4758.80 (Official Build) (x86_64)` enquanto escrevo esta aula)
- [Visual Studio Code](https://code.visualstudio.com/) (estou usando a versão `1.64.0` ) ou alguma outra IDE de sua preferência

# Execução em tempo real
Execução npm run cy:open 
ou 
npm run cy:open:mobile
ou
npx cypress run --spec "caminho do spec"

# Execução em modo headless
npm test

# Execução o docker
docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce
