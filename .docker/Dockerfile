FROM node:lts

# 必要なツールのインストール
RUN apt-get update && apt-get install -y curl

# nvmのインストール
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION lts/*
RUN mkdir -p $NVM_DIR
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# nvmとNode.jsの設定
RUN . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    nvm use default

# nvmの環境変数の設定
ENV PATH $NVM_DIR/versions/node/$(nvm current)/bin:$PATH

# 必要なパッケージのインストールとロケールの設定:git動作に必要 ubuntuの場合
RUN apt-get update && apt-get install -y locales
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && locale-gen
RUN update-locale LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# git-secretsのインストール
RUN git clone https://github.com/awslabs/git-secrets.git /tmp/git-secrets \
    && cd /tmp/git-secrets \
    && make install \
    && rm -rf /tmp/git-secrets

# シェル設定ファイルにnvmの設定を追加
RUN echo "export NVM_DIR=\"$NVM_DIR\"" >> /etc/bash.bashrc && \
    echo "[ -s \"$NVM_DIR/nvm.sh\" ] && \. \"$NVM_DIR/nvm.sh\"" >> /etc/bash.bashrc && \
    echo "[ -s \"$NVM_DIR/bash_completion\" ] && \. \"$NVM_DIR/bash_completion\"" >> /etc/bash.bashrc

# Angular CLIのグローバルインストール
# RUN npm install -g @angular/cli
RUN npm install -g @angular/cli@17.2.0

# 作業ディレクトリの設定
WORKDIR /workspace

# コンテナ実行時のコマンド
CMD [ "bash" ]
