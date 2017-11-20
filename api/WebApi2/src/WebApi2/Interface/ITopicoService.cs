using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi2.Model;

namespace WebApi2.Interface
{
    public interface ITopicoService
    {
        IEnumerable<Topico> ListTopicos();
        void AddTopico(Topico _topico);
    }
}
