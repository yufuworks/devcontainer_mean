ARG VARIANT="20-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# 必要なパッケージのインストールとロケールの設定:git動作に必要 ubuntuの場合
RUN apt-get update && apt-get install -y locales
RUN sed -i '/ja_JP.UTF-8/s/^# //g' /etc/locale.gen && locale-gen
RUN update-locale LANG=ja_JP.UTF-8 LC_ALL=ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8

# git-secretsのインストール
RUN git clone https://github.com/awslabs/git-secrets.git /tmp/git-secrets \
    && cd /tmp/git-secrets \
    && make install \
    && rm -rf /tmp/git-secrets

# Angular CLIのグローバルインストール 18系
RUN npm install -g @angular/cli@18 @angular/core 

# 作業ディレクトリの設定
WORKDIR /workspace

# コンテナ実行時のコマンド
CMD [ "bash" ]
