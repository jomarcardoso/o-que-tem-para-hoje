using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiExemplo.Model;

namespace WebApiExemplo.ViewModel
{
    public class SolicitaTopicosResposta
    {
        public IEnumerable<Topico> topicos { get; private set; }
        public string status { get; set; }
        public string mensagem { get; set; }
        public SolicitaTopicosResposta(IEnumerable<Topico> arg)
        {

            if (arg != null)
            {
                this.status = "Sucesso";
                topicos = arg;
            }
            else
            {
                this.status = "Sucesso";
                this.mensagem = "Nenhum registro de exponencial encontrado";
            }
        }

        public SolicitaTopicosResposta(String argErro)
        {
            this.mensagem = argErro;
            this.status = "Erro";

        }
    }
}
