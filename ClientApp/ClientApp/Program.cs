using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Threading;
using System.Threading.Tasks;

namespace ClientApp
{
	internal class Client
	{
		public async Task<string> Get()
		{
			var rq = WebRequest.CreateHttp("http://localhost:4000");
			rq.KeepAlive = true;
			var response = await rq.GetResponseAsync();
			var stream = response.GetResponseStream();
			var sr = new StreamReader(stream);
			return await sr.ReadToEndAsync();
		}
	}

	internal class Program
	{
		private static void Main(string[] args)
		{
			var sw = new Stopwatch();
			sw.Start();
			var timer = new Timer(obj => { Console.WriteLine(sw.Elapsed); }, null, TimeSpan.Zero, TimeSpan.FromSeconds(5));

			var c = new Client();
			var t = c.Get();

			var r = t.Result;

			Console.Write("Press ENTER to exit.");
			Console.ReadLine();
		}
	}
}