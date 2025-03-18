"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, X, Calendar, LogOut, Plus } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function TripsDashboard() {
  const [startDate, setStartDate] = useState("22.02.2024")
  const [endDate, setEndDate] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showArchived, setShowArchived] = useState(false)

  const trips = [
    {
      id: "000115",
      dateRange: "22.02.2024 - 27.02.2024",
      plannedSum: "29 400,00",
      actualSum: "29 400,00",
      cities: "Москва, Ярославль, Ижевск, Владимир",
    },
    {
      id: "000117",
      dateRange: "22.02.2024 - 27.02.2024",
      plannedSum: "29 400,00",
      actualSum: "29 400,00",
      cities: "Москва",
    },
    {
      id: "000074",
      dateRange: "22.02.2024 - 27.02.2024",
      plannedSum: "29 400,00",
      actualSum: "29 400,00",
      cities: "Кременчуг-Константиновское, Петропавловск-Камчатский, Новосибирск, Волгоград, Саратов",
    },
    {
      id: "000115",
      dateRange: "22.02.2024 - 27.02.2024",
      plannedSum: "29 400,00",
      actualSum: "29 400,00",
      cities: "Москва, Ярославль, Ижевск, Владимир",
    },
    {
      id: "000211",
      dateRange: "22.02.2024 - 27.02.2024",
      plannedSum: "29 400,00",
      actualSum: "29 400,00",
      cities: "Москва, Ярославль, Ижевск, Владимир",
    },
    {
      id: "000118",
      dateRange: "22.02.2024 - 27.02.2024",
      plannedSum: "29 400,00",
      actualSum: "29 400,00",
      cities: "Москва, Ярославль, Ижевск, Владимир",
    },
    {
      id: "000119",
      dateRange: "22.02.2024 - 27.02.2024",
      plannedSum: "29 400,00",
      actualSum: "29 400,00",
      cities: "Москва, Ярославль, Ижевск, Владимир",
    },
    {
      id: "000120",
      dateRange: "22.02.2024 - 27.02.2024",
      plannedSum: "29 400,00",
      actualSum: "29 400,00",
      cities: "Москва, Ярославль, Ижевск, Владимир",
    },
    {
      id: "000133",
      dateRange: "22.02.2024 - 27.02.2024",
      plannedSum: "29 400,00",
      actualSum: "29 400,00",
      cities: "Москва, Ярославль, Ижевск, Владимир",
    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="font-medium text-lg">Поездки</div>
          <div className="flex items-center text-blue-500 gap-2">
            <span>Заболоцкий К.О.</span>
            <LogOut className="w-5 h-5" />
          </div>
        </div>
        <div className="border-b-2 border-blue-500 w-[80px] ml-4"></div>
      </header>

      {/* Main content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-medium">Мои поездки</h1>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-1">
            <Plus className="w-4 h-4" />
            <span>Оформить поездку</span>
          </Button>
        </div>

        {/* Filters and Cards with light blue background */}
        <div className="bg-[#F6FCFF] -mx-4 px-4 pb-4">
          {/* Filters */}
          <div className="flex items-center mb-8 gap-2 pt-4">
            <div className="flex items-center">
              <span className="mr-2">Период с:</span>
              <div className="relative">
                <Input
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="pl-2 pr-8 py-1 border rounded w-[130px]"
                />
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <X className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center ml-4">
              <span className="mr-2">по:</span>
              <div className="relative">
                <Input
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="Выбрать..."
                  className="pl-2 pr-8 py-1 border rounded w-[130px]"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="relative ml-4">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск..."
                className="pl-2 pr-8 py-1 border rounded w-[220px]"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <Button variant="ghost" className="text-blue-500 flex items-center ml-2">
              <X className="w-4 h-4 mr-1" />
              <span>Сбросить все</span>
            </Button>

            <div className="ml-auto flex items-center">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="showArchived"
                  checked={showArchived}
                  onCheckedChange={setShowArchived}
                  className="border-gray-300 data-[state=checked]:bg-blue-500"
                />
                <label
                  htmlFor="showArchived"
                  className="text-gray-600 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Показать архивные поездки
                </label>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-3">
            {trips.map((trip, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-4">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="flex flex-col">
                      <div className="text-gray-500 text-sm mb-1">№ поездки</div>
                      <a href="#" className="text-blue-500">
                        {trip.id}
                      </a>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 text-sm mb-1">Дата поездки</div>
                      <div>{trip.dateRange}</div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 text-sm mb-1">Сумма, план</div>
                      <div>{trip.plannedSum}</div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 text-sm mb-1">Сумма, факт</div>
                      <div>{trip.actualSum}</div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 text-sm mb-1">Город</div>
                      <div className="truncate relative">
                        {index === 2 ? (
                          <div className="flex items-center">
                            <span className="truncate block mr-1">{trip.cities}</span>
                            <TooltipProvider delayDuration={200}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="cursor-help inline-flex">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM9 4C9 4.26522 8.89464 4.51957 8.70711 4.70711C8.51957 4.89464 8.26522 5 8 5C7.73478 5 7.48043 4.89464 7.29289 4.70711C7.10536 4.51957 7 4.26522 7 4C7 3.73478 7.10536 3.48043 7.29289 3.29289C7.48043 3.10536 7.73478 3 8 3C8.26522 3 8.51957 3.10536 8.70711 3.29289C8.89464 3.48043 9 3.73478 9 4ZM7 7C6.73478 7 6.48043 7.10536 6.29289 7.29289C6.10536 7.48043 6 7.73478 6 8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9V12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H9C9.26522 13 9.51957 12.8946 9.70711 12.7071C9.89464 12.5196 10 12.2652 10 12C10 11.7348 9.89464 11.4804 9.70711 11.2929C9.51957 11.1054 9.26522 11 9 11V8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7H7Z"
                                        fill="#84919A"
                                      />
                                    </svg>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-800 text-white p-3 rounded-md max-w-[400px] relative after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-gray-800">
                                  <div className="flex flex-col">
                                    <p>Кременчуг-Константиновское,</p>
                                    <p>Петропавловск-Камчатский,</p>
                                    <p>Новосибирск, Волгоград, Саратов</p>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        ) : (
                          <span className="truncate block">{trip.cities}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="text-gray-500 text-sm mb-1">Статус</div>
                      <div className="text-right">
                        <Button
                          variant="outline"
                          className="text-gray-500 bg-gray-100 hover:bg-gray-200 rounded px-4 text-xs py-1"
                        >
                          Документы
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

