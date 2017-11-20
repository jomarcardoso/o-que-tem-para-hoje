using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi2.Interface;
using WebApi2.Model;

namespace WebApi2.Services
{
    public class TopicoService : ITopicoService
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
