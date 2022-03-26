import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AlunosController {
  public async index({ request }: HttpContextContract) {
    const { id } = request.all();

    const alunos = [
      {
        id: 1,
        nome: "Alexandre",
        curso: "SI",
      },
      {
        id: 2,
        nome: "Leonardo",
        curso: "SI",
      },
    ];

    return alunos.find((aluno) => aluno.id == id);
  }

  public async store({request}: HttpContextContract) {
      const aluno = request.all();
      console.log(aluno);
  }
}
