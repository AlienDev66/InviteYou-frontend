# Imagem de Origem
FROM node:13-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /usr/app

COPY package*.json ./

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
# COPY package.json package.json
# RUN yarn add --silent
COPY . .

EXPOSE 3000
RUN yarn add react-scripts -g --silent
# start app
CMD ["yarn", "start"]
