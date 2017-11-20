using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiExemplo.Model;

namespace WebApiExemplo.Interface
{
   public interface ITopicoService
    {
        IEnumerable<Topico> ListTopicos();

        void AddTopico(Topico _topico);
    }
}
