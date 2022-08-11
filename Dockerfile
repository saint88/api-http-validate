FROM node

USER root

RUN mkdir -p /root/api_tests

WORKDIR /root/api_tests

COPY . /root/api_tests/

RUN npm ci

CMD ["npm", "run", "test"]