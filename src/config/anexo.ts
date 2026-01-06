import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { tarefa } from "./tarefa";

export const anexo = pgTable("anexo", {
    id: uuid().defaultRandom().primaryKey(),
    url: varchar({ length:256 }).notNull(),
    tarefaId: uuid().notNull().references(() => tarefa.id)
});

export const anexo_realtion_with_tarefa = relations(anexo, ({ one })=>({
    author: one(tarefa, {
        fields: [anexo.tarefaId],
        references: [tarefa.id]
    }),
}));