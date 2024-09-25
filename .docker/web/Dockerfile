FROM node:lts

# 必要なツールのインストール
RUN apt-get update && apt-get install -y curl

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

# Angular CLIのグローバルインストール
# RUN npm install -g @angular/cli
RUN npm install -g @angular/cli@17.2.0

# 作業ディレクトリの設定
WORKDIR /workspace

# コンテナ実行時のコマンド
CMD [ "bash" ]
