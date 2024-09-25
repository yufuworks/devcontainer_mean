FROM node:12-alpine

# npm ERR! Tracker "idealTree" already exists 対策 ※ node:1５以上で発生
# WORKDIRをdocker-composeと合わせて、package.jsonをコピーしておく
WORKDIR /node
# COPY ./package.json /node
# COPY ./package-lock.json /node

RUN npm cache clean --force
RUN npm install mocky
