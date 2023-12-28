import { Topbar } from "../components/layout/topbar";
import { Button } from "../components/ui/button";
import { Descricao } from "../components/layout/qualquerNome";

export default function Home() {
  return (
      <div className="h-screen w-full">
        <Topbar/>
        <Descricao/>   
        <Button/>
      </div>
  )
}

