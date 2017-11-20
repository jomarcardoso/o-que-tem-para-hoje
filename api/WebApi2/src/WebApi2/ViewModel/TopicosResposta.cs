using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi2.Model;

namespace WebApi2.ViewModel
{
    public class TopicosResposta
    {
        public IEnumerable<Topico>  topicos { get; private set; }
        public string status { get; set; }
        public string mensagem { get; set; }
        public TopicosResposta(IEnumerable<Topico> arg)
        {
            if (arg != null)
            {
                this.status = "Sucesso";
                topicos = arg;
            }
            else
            {
                this.status = "Sucesso";
                this.mensagem = "Nenhum registro de topico encontrado";
            }
        }

        public TopicosResposta(String argErro)
        {
            this.mensagem = argErro;
            this.status = "Erro";
        }
    }
}
