FROM alpine as watchman

RUN \
  apk --update add \
  automake \
  autoconf \
  build-base \
  linux-headers\
  git && \
  git clone https://github.com/facebook/watchman.git &&\
  cd watchman &&\
  git checkout v4.7.0 &&\
  ./autogen.sh &&\
  ./configure &&\
  make && \
  make install

FROM node:8.7-alpine
LABEL maintainer="Seosamh Cahill"

COPY --from=watchman /usr/local/bin/watchman /usr/local/bin

WORKDIR /src

COPY package.json .

RUN \
  npm install -g \
  ember-cli@2.16.2 && \
  apk --update --no-cache add \
  chromium \
  inotify-tools \
  ttf-freefont \
  udev && \
  mkdir -p /usr/local/var/run/watchman

COPY . .

EXPOSE 4200 7020 7357 9222

ENV PATH /usr/local/bin:$PATH

CMD [ "ember", "serve" ]