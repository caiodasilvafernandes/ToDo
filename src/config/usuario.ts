import { pgTable, uuid, integer, varchar, date, timestamp } from "drizzle-orm/pg-core";
import { tarefa } from "./tarefa.ts";
import { relations } from "drizzle-orm";
import { categoria } from "./categoria.ts";

export const usuario = pgTable("usuario",{
    id: uuid().defaultRandom().primaryKey(),
    nome: varchar({ length: 256 }).notNull(),
    dtNascimento: date(),
    timestamp: timestamp().defaultNow(),
    status: integer().notNull()
});

export const usuario_relation_with_tarefa = relations(usuario,({ many }) => ({
    tarefa: many(tarefa),
}));

export const usuario_relation_with_categoria = relations(usuario,({ many }) => ({
    categoria: many(categoria),
}));