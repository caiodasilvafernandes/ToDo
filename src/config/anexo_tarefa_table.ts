import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { tarefa } from "./tarefa_table";

export const anexo_tarefa = pgTable("anexo", {
    id: uuid().defaultRandom().primaryKey(),
    url: varchar({ length:256 }).notNull(),
    tarefaId: uuid().notNull().references(() => tarefa.id)
});

export const anexo_tarefa_realtion_with_tarefa = relations(anexo_tarefa, ({ one })=>({
    author: one(tarefa, {
        fields: [anexo_tarefa.tarefaId],
        references: [tarefa.id],
    }),
}));