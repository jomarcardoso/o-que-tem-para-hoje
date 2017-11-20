using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClienteWebApi.Models
{
    public class Topico
    {
        public int IdTopico { get; set; }
        public string NomeTopico { get; set; }
        public Topico(int _id, string _topico)
        {
            IdTopico = _id;
            NomeTopico = _topico;
        }
        public Topico()
        {

        }
    }
}
