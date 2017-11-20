using ClienteWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClienteWebApi.ViewModel
{
    public class SolicitaTopicosResposta
    {
        public IEnumerable<Topico> topicos { get; set; }
        public string status { get; set; }
        public string mensagem { get; set; }
    }
}
