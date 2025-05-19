import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Atom, Globe, Search , Mic, AudioLines, Gpu, Paperclip} from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AiModelsOptions } from '@/services/Shared'

const ChatInputBox = () => {
  return (
   
      <div className='flex flex-col items-center justify-center h-screen w-full'>
          <h2 className='text-4xl font-bold text-center'>
            Perpexcity
          </h2>
          <div className=' flex flex-row border-amber-50 p-4 bg-white shadow-md rounded-lg mt-8'>

            <div>
              <Tabs defaultValue="search" className="w-[400px]">
              <TabsContent value="search">
                <input type="text"
                  placeholder='Type your search here...'
                  className='w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'/>
            </TabsContent>
              <TabsContent value="research">
                <input type="text"
                  placeholder='Research anythink here ...'
                  className='w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'/>
            </TabsContent>
              <TabsList>
                <TabsTrigger value="search" className={'text-primary'}><Search/> Search</TabsTrigger>
                <TabsTrigger value="research" className={'text-primary'} ><Atom/> Research</TabsTrigger>
              </TabsList>

            </Tabs>


            </div>
            <div className='items-end justify-center flex'>
              <div className='flex justify-between items-center gap-2'>

                <DropdownMenu>
                  <DropdownMenuTrigger><Button variant='ghost' >
                  <Gpu className='text-gray-500 w-5 h-5'/>
                </Button></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {/*<DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />*/}
                    {AiModelsOptions.map((model, index) => (

                     <DropdownMenuItem key={index}>
                      <div>
                        <h2 className='text-sm'> {model.name}</h2>
                        <p className='text-xs'>{model.desc}</p>
                      </div>
                     </DropdownMenuItem>
                    ))}
                   
                  </DropdownMenuContent>
                </DropdownMenu>




                <Globe className='text-gray-500 w-5 h-5'/>
                <Paperclip className='text-gray-500 w-5 h-5'/>
                <Mic className='text-gray-500 w-5 h-5'/>
                <Button>
                  <AudioLines className='text-white w-5 h-5'/>
                </Button>
                


              </div>
            </div>


            

          </div>
          
      </div>

  )
}

export default ChatInputBox