using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Profiles
{
    public class Details
    {
        public class Query : IRequest<Result<Profile>>
        {
            public string Username { get; set; }
        }

        public class Handler : IRequestHandler<Query,Result<Profile>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Profile>> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _context.Users
                .ProjectTo<Profile>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync(x => x.UserName == request.Username); ;

                Console.WriteLine("user info", user);
                return Result<Profile>.Success(user);
            }
        }

    }
}