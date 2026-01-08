import { pgTable, uuid, integer, varchar, date, timestamp } from "drizzle-orm/pg-core";
import { tarefa } from "./tarefa_table.ts";
import { relations } from "drizzle-orm";
import { categoria } from "./categoria_table.ts";

export const usuario_tabela = pgTable("usuario",{
    id: uuid().defaultRandom().primaryKey(),
    nome: varchar({ length: 256 }).notNull(),
    img: varchar({ length: 256 }),
    dtNascimento: date(),
    timestamp: timestamp().defaultNow(),
    status: integer().notNull()
});

export const usuario_relation_with_tarefa = relations(usuario_tabela,({ many }) => ({
    tarefa: many(tarefa),
}));

export const usuario_relation_with_categoria = relations(usuario_tabela,({ many }) => ({
    categoria: many(categoria),
}));