import { pgTable, uuid, integer, text  } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { usuario_tabela } from "./usuario_table.ts"
import { anexo_tarefa } from "./anexo_tarefa_table.ts";

export const tarefa = pgTable("tarefa",{
    id: uuid().defaultRandom().primaryKey(),
    descricao: text(),
    status: integer().notNull(),
    usuario_id: uuid().references(() => usuario_tabela.id)
});

export const tarefa_relation_with_usuario = relations(tarefa, ({ one }) =>({
	author: one(usuario_tabela,{
		fields: [tarefa.usuario_id],
		references: [usuario_tabela.id],
	}),
}));

export const tarefa_relation_with_anexo = relations(tarefa, ({ many }) =>({
    anexo_tarefa:many(anexo_tarefa)
}));