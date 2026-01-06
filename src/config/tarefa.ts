import { pgTable, uuid, integer, text  } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { usuario } from "./usuario.ts"
import { anexo } from "./anexo.ts";

export const tarefa = pgTable("tarefa",{
    id: uuid().defaultRandom().primaryKey(),
    descricao: text(),
    status: integer().notNull(),
    usuario_id: uuid().references(() => usuario.id)
});

export const tarefa_relation_with_usuario = relations(tarefa, ({ one }) =>({
	author: one(usuario,{
		fields: [tarefa.usuario_id],
		references: [usuario.id],
	}),
}));

export const tarefa_relation_with_anexo = relations(tarefa, ({ many }) =>({
    anexo:many(anexo)
}));