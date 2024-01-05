FROM node:21-alpine as builder
WORKDIR /build
RUN npm i -g pnpm && pnpm set progress=false && pnpm config set depth 0
COPY . .
RUN pnpm i --only=production && pnpm build

FROM builder as runner
WORKDIR /home/node
ENV ROARR_LOG=true
COPY --from=builder /build/package.json ./
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/target ./target
USER node
CMD [ "node", "target/index.js" ]
