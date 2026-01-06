FROM oven/bun:1.3.5
WORKDIR /app
COPY packege*.json
RUN bun install
COPY . .
EXPOSE 4200
CMD ["bun", "run", "dev"]