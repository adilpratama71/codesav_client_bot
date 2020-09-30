import arg from "arg"

export default (args: string[]) => {
  const argCommand = arg(
    {
      "-n": String,
      "-c": () => getCode(args)
    },
    {
      argv: args
    }
  )
  return argCommand
}

function getCode(args: string[]) {
  const code = args.slice(args.indexOf("-c") + 1).join(" ")
  return code
}
