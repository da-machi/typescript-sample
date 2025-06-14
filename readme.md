# 簡単な操作手順

## コンパイル

```cmd
npx tsc
```

## テスト実行

```cmd
npx jest
```

## クローン後、初回の操作

### 関連パッケージの更新

```cmd
npm install
```

### ビルド

```cmd
npx tsc
```

### テスト

```cmd
npx jest
```

## アップロードする際の構成

lambdaにアップロードする際は色々ファイルの配置構成を変える必要がある。

```cmd
handler.js
service.js
node_modules/（依存あれば）
package.json（任意）
```

## 管理対象とすべきファイル

```cmd
src/
package.json
package-lock.json または yarn.lock
tsconfig.json
.gitignore
```

## デプロイ時の適当サンプル

### 1. distのjsファイルを一時ディレクトリにコピー

mkdir temp_deploy
cp dist/*.js temp_deploy/

### 2. node_modulesをコピー（必要な場合のみ）

cp -r node_modules temp_deploy/

### 3. その他のファイルはコピーしない or 削除

### 4. ZIP作成

cd temp_deploy
zip -r ../lambda_deploy.zip ./*
cd ..

### 5. 一時ディレクトリを削除

rm -rf temp_deploy