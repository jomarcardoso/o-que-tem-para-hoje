using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiExemplo.Interface;
using WebApiExemplo.Model;

namespace WebApiExemplo.Services
{
    public class TopicoService: ITopicoService
    {
        private List<Topico> _lstTopico = new List<Topico>();
        public void AddTopico(Topico _topico)
        {
            _lstTopico.Add(_topico);
        }
        public IEnumerable<Topico> ListTopicos()
        {
            return _lstTopico;
        }
    }
}
