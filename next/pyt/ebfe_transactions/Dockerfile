FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN  yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV development
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
#COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./        
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --from=builder --chown=nextjs:nodejs /app/package.json .
COPY --from=builder --chown=nextjs:nodejs /app/yarn.lock .
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js .
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

#COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
#COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/standalone/static
RUN rm -fr node_modules

USER root

EXPOSE 3001

ENV PORT 3001

CMD ["yarn", "start"]